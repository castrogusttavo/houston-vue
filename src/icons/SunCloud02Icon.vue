
<template>
  <Icon :iconName="'sun-cloud-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SunCloud02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sun-cloud-02'
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
