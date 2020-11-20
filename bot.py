from selenium import webdriver;

class HamBot:

  def __init__(self):
    self.driver = webdriver.Chrome('/Users/othurm/Desktop/Insta-Bot/chromedriver')


  def get_ham(self):
    print('getting ham...')
    self.driver.get('https://www.google.com/search?q=ham&oq=ham&aqs=chrome..69i57.2379j0j4&sourceid=chrome&ie=UTF-8');
    self.driver.find_element_by_css_selector('#hdtb-msb-vis > div:nth-child(3) > a').click()
    self.driver.find_element_by_css_selector('#islrg > div.islrc > div:nth-child(1) > a.wXeWr.islib.nfEiy.mM5pbd > div.bRMDJf.islir > img').click()
    img = self.driver.find_element_by_css_selector('#Sva75c > div > div > div.pxAole > div.tvh9oe.BIB1wf > c-wiz > div.OUZ5W > div.zjoqD > div > div.v4dQwb > a > img')
    src = img.get_attribute('src')
    print(src)


if __name__ == '__main__':
  hambot = HamBot()
  hambot.get_ham()