
<template>
  <Icon :iconName="'profile-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Profile02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'profile-02'
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
