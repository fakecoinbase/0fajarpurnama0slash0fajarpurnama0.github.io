$(document).ready(function(){
  $(".paypal-widget").html(`
  
<!-- Paypal Donation -->
            <form class="row" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
               <input type="hidden" name="cmd" value="_s-xclick" />
               <div class="input-field col s12">
                  <input type="hidden" name="on0" value="Donate" />
                  <select name="os0">
                     <option value="" disabled selected>Donate</option>
                     <option value="Thanks for the drinks.">Thanks for the drinks. $1.00 USD</option>
                     <option value="Thanks for the meals.">Thanks for the meals. $10.00 USD</option>
                     <option value="Thanks for the living costs.">Thanks for the living costs. $50.00 USD</option>
                     <option value="Thanks for your generosity.">Thanks for your generosity. $100.00 USD</option>
                  </select>
               </div>
               <div class="input-field col s12">
                  <input type="hidden" name="on1" value="Your Name" /><label>Your Name</label><input type="text" name="os1" maxlength="200" />
               </div>
               <div class="input-field col s12">
                  <input class="input-field" type="hidden" name="on2" value="Email" /><label>Email</label><input type="text" name="os2" maxlength="200" />
               </div>
               <input type="hidden" name="currency_code" value="USD" />
               <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
                  " />
               <input type="image" src="https://www.paypalobjects.com/en_US/JP/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
               <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
  `);
});