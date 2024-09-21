
<template>
  <Icon :iconName="'directions-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Directions02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'directions-02'
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
