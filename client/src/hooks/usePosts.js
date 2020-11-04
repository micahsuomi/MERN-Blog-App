import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { searchPosts } from "../redux/actions/postsActions";

export default function usePosts(query, postsToSort) {
  const posts = useSelector((state) => state.posts.posts);
  const filteredPosts = useSelector((state) => state.posts.filteredPosts);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [sortDataByAuthor, setSortDataByAuthor] = useState([]);
  const [sortDataByCategory, setSortDataByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (err) {
      setErr(err);
    }
    setData(posts);
  }, [posts, err]);

  useEffect(() => {
    setData(filteredPosts);
  }, [filteredPosts]);

  useEffect(() => {
    filterPosts();
  }, [query]);

  useEffect(() => {
    sortPostsByAuthor(postsToSort);
    sortPostsByCategory(postsToSort);
  }, [postsToSort]);

  const filterPosts = useCallback(() => {
    const results = posts.filter((post) => {
      if (
        post.title.includes(query) ||
        post.title.toLowerCase().includes(query) ||
        post.author.includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.category.includes(query) ||
        post.category.toLowerCase().includes(query)
      ) {
        return post;
      }
    });
    dispatch(searchPosts(results));
  }, [posts, query, dispatch]);

  const sortPostsByAuthor = useCallback(() => {
    setTimeout(() => {
      let authorArr = [];
      posts.filter((post) => {
        authorArr.push(post.author);
      });
      const setArr = new Set(authorArr);
      let countPosts = [];
      for (const a of setArr) {
        const filteredAuthors = authorArr.filter((author) => author === a);
        countPosts.push({ author: a, posts: filteredAuthors.length });
      }
      let sortedPostsByAuthor = countPosts.sort((a, b) => {
        if (a.posts > b.posts) return -1;
        if (a.posts < b.posts) return 1;
        return 0;
      });
      setSortDataByAuthor(sortedPostsByAuthor);
      setIsLoading(true);
    }, 3000);
  }, [posts]);

  const sortPostsByCategory = useCallback(() => {
    setTimeout(() => {
      let categoryArr = [];
      posts.filter((post) => {
        categoryArr.push(post.category);
      });
      const setCategoryArr = new Set(categoryArr);
      let countPostsCat = [];
      for (const c of setCategoryArr) {
        const filteredCategories = categoryArr.filter(
          (category) => category === c
        );
        countPostsCat.push({ category: c, posts: filteredCategories.length });
      }
      let sortedPostsByCategory = countPostsCat.sort((a, b) => {
        if (a.posts > b.posts) return -1;
        if (a.posts < b.posts) return 1;
        return 0;
      });
      setSortDataByCategory(sortedPostsByCategory);
      setIsLoading(true);
    }, 3000);
  }, [posts]);

  return [err, data, sortDataByAuthor, sortDataByCategory, isLoading];
}
