
<template>
  <Icon :iconName="'hospital-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Hospital02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hospital-02'
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
