import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import * as authActions from '../features/auth/actions/auth.actions';
import * as userActions from '../features/user/actions/user.actions';

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