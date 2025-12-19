const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.querySelector('.faq-question').addEventListener('click', () => {
    faq.classList.toggle('open');
  });
});
<style>
.mobile-cta {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: var(--gradient);
  text-align: center;
  padding: 12px;
  z-index: 999;
}
.mobile-cta a {
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
}
@media(min-width: 992px){
  .mobile-cta { display:none; }
}
</style>

<div class="mobile-cta">
  <a href="order.html">🔥 Order Burn Peak – Limited Discount</a>
</div>
