package id.putra.my_erp.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MyController {

    @GetMapping("/")
    public String index(Authentication authentication, @AuthenticationPrincipal OidcUser user, Model model) {
        model.addAttribute("username", user.getPreferredUsername());
        model.addAttribute("roles", authentication.getAuthorities().toString());
        return "index";
    }

}
