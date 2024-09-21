
<template>
  <Icon :iconName="'facebook-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Facebook02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'facebook-02'
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
