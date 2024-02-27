import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import * as authActions from '../actions/auth.actions';
import * as userActions from '../actions/user.actions';

const actions = {
    ...authActions,
    ...userActions
  };

export const appSelector = useSelector;
export const useAppDipatch = () => useDispatch();

export const useAppActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
  };