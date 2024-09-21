
<template>
  <Icon :iconName="'user-shield-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserShield02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-shield-02'
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
