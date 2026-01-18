// 路由配置

import Layout from '@/pages/Layout' // 要点：通过 craco.config.js 使用 @ 表示 src 目录
import Login from '@/pages/Login' 

import { createBrowserRouter } from 'react-router-dom'

// 配置路由实例

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />
    },
    {
        path: "/login",
        element: <Login />
    }
])
 
export default router