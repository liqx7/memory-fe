import Mock from 'mockjs';

// 1． 第一个记忆周期：5分钟
// 2． 第二个记忆周期：30分钟
// 3． 第三个记忆周期：12小时
// 4． 第四个记忆周期：1天
// 5． 第五个记忆周期：2天
// 6． 第六个记忆周期：4天
// 7． 第七个记忆周期：7天
// 8． 第八个记忆周期：15天
export default {
  'GET /api/list': Mock.mock({
    success: true,
    'data|1-20': [
      {
        'id|+1': 1,
        title: '@title',
        create_time: '@datetime',
        'time_list|1-8': ['@datetime'],
      },
    ],
  }),
};
