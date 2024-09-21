
<template>
  <Icon :iconName="'user-love-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserLove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-love-02'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
