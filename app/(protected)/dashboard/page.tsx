// import { onBoardUser } from '@/actions/user'
// import { redirect } from 'next/navigation'


type Props = {}

const Page = async (props: Props) => {
//   const user = await onBoardUser()
//   if (user.status === 200 || user.status === 201) {
//     return redirect(`dashboard/${user.data?.firstname}${user.data?.lastname}`)
//   }

  return (
    <div> Dashboard</div>
  )
}

export default Page