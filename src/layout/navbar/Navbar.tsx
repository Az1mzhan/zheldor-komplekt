import type { FC } from "react"
import { useState } from "react"
import { useSections } from "../../hooks/useSections/useSections"
import { Box, Drawer, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import logo from "../../../assets/logo1_white.svg"
import styles from "./navbar.module.css"

export const Navbar: FC = () => {
  const sections = useSections()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  return (
    <>
      <nav>
        <div className={styles.navContentContainer}>
          <img width={100} height={100} src={logo} />
          <Box
            className={styles.linksContainer}
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          >
            {sections.map((section, id) => (
              <a className={styles.navElem} href={section.url} key={id}>
                {section.title}
              </a>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            container={window.document.body}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            PaperProps={{ sx: { width: "62.5%" } }}
            sx={{
              display: { sm: "block", md: "none" },
            }}
          >
            <div className={styles.drawerContainer}>
              {sections.map((section, id) => (
                <a className={styles.drawerElem} href={section.url} key={id}>
                  {section.title}
                </a>
              ))}
            </div>
          </Drawer>
        </div>
      </nav>
    </>
  )
}
