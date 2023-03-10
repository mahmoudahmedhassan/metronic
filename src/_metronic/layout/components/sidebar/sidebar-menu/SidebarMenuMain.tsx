/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      {/* <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      /> */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>items</span>
        </div>
      </div>
      {/* <groub-1></groub-1> */}
      <SidebarMenuItemWithSub
        fontIcon='bi-layers'
        icon='/media/icons/duotune/general/gen001.svg'
        to='/group_1'
        title='Group_1'
      >
        <SidebarMenuItem to='group_1/child_1' title='Group_1_child_1' hasBullet={true} />
        <SidebarMenuItem to='group_1/child_2' title='Group_1_child_2' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItem
        // to='/apps/user-management/users'
        to="/group_2/group_2"
        icon='/media/icons/duotune/art/art002.svg'
        title='Group_2'
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/group_3/group_3'
        icon='/media/icons/duotune/art/art002.svg'
        title='Group_3'
        fontIcon='bi-app-indicator'
      />{' '}
      <SidebarMenuItem
        to='/group_4/group_4'
        icon='/media/icons/duotune/art/art002.svg'
        title='Group_4'
        fontIcon='bi-app-indicator'
      />{' '}
        <SidebarMenuItem
        to='/group_5/group_5'
        icon='/media/icons/duotune/art/art002.svg'
        title='Group_5'
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/group_6/group_6'
        icon='/media/icons/duotune/art/art002.svg'
        title='Group_6'
        fontIcon='bi-app-indicator'
      />
       <SidebarMenuItemWithSub
        fontIcon='bi-layers'
        icon='/media/icons/duotune/general/gen001.svg'
        to='/group_7'
        title='Group_7'
      >
        <SidebarMenuItem to='group_7/child_1' title='Group_7_child_1' hasBullet={true} />
        <SidebarMenuItem to='group_7/child_2' title='Group_7_child_2' hasBullet={true} />
        <SidebarMenuItem to='group_7/child_3' title='Group_7_child_3' hasBullet={true} />
        <SidebarMenuItem to='group_7/child_4' title='Group_7_child_4' hasBullet={true} />
      </SidebarMenuItemWithSub>

      {/* <SidebarMenuItemWithSub
        fontIcon='bi-layers'
        icon='/media/icons/duotune/general/gen001.svg'
        to='/group_7'
        title='Group_7'
      >
        <SidebarMenuItem to='group_7/child_1' title='Group_7_child_1' hasBullet={true} />
        <SidebarMenuItem to='group_7/child_2' title='Group_7_child_2' hasBullet={true} />
        <SidebarMenuItem to='group_7/child_3' title='Group_7_child_3' hasBullet={true} />
        <SidebarMenuItem to='group_7/child_4' title='Group_7_child_4' hasBullet={true} />
      </SidebarMenuItemWithSub> */}
{/* 
      <SidebarMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >  */}
        {/* <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <SidebarMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <SidebarMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <SidebarMenuItem
            to='/crafted/pages/profile/campaigns'
            title='Campaigns'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/documents'
            title='Documents'
            hasBullet={true}
          /> 
          <SidebarMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </SidebarMenuItemWithSub> */}

        {/* <SidebarMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <SidebarMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <SidebarMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </SidebarMenuItemWithSub> */}

      {/* </SidebarMenuItemWithSub> */}


      {/* <SidebarMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <SidebarMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
        <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <SidebarMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <SidebarMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <SidebarMenuItem
            to='/crafted/pages/profile/campaigns'
            title='Campaigns'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/documents'
            title='Documents'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to='/error'
        title='Errors'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen040.svg'
      >
        {' '}
        <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <SidebarMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <SidebarMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <SidebarMenuItem
            to='/crafted/pages/profile/campaigns'
            title='Campaigns'
            hasBullet={true}
          />
          <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
            <SidebarMenuItem
              to='/crafted/pages/profile/overview'
              title='Overview'
              hasBullet={true}
            />
            <SidebarMenuItem
              to='/crafted/pages/profile/projects'
              title='Projects'
              hasBullet={true}
            />
            <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
              <SidebarMenuItem
                to='/crafted/pages/profile/overview'
                title='Overview'
                hasBullet={true}
              />
              <SidebarMenuItem
                to='/crafted/pages/profile/projects'
                title='Projects'
                hasBullet={true}
              />
              <SidebarMenuItem
                to='/crafted/pages/profile/campaigns'
                title='Campaigns'
                hasBullet={true}
              />
              <SidebarMenuItem
                to='/crafted/pages/profile/documents'
                title='Documents'
                hasBullet={true}
              />
              <SidebarMenuItem
                to='/crafted/pages/profile/connections'
                title='Connections'
                hasBullet={true}
              />
            </SidebarMenuItemWithSub>
            <SidebarMenuItem
              to='/crafted/pages/profile/campaigns'
              title='Campaigns'
              hasBullet={true}
            />
            <SidebarMenuItem
              to='/crafted/pages/profile/documents'
              title='Documents'
              hasBullet={true}
            />
            <SidebarMenuItem
              to='/crafted/pages/profile/connections'
              title='Connections'
              hasBullet={true}
            />
          </SidebarMenuItemWithSub>
          <SidebarMenuItem
            to='/crafted/pages/profile/documents'
            title='Documents'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>
        <SidebarMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <SidebarMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </SidebarMenuItemWithSub>
  */}


  
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div> */}



      <SidebarMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <SidebarMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </SidebarMenuItemWithSub>  
       <SidebarMenuItem
        to='/apps/user-management/users'
        icon='/media/icons/duotune/general/gen051.svg'
        title='User management'
        fontIcon='bi-layers'
      />
    </>
  )
}

export {SidebarMenuMain}
