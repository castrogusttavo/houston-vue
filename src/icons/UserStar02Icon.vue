
<template>
  <Icon :iconName="'user-star-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserStar02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-star-02'
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
