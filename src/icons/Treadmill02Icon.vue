
<template>
  <Icon :iconName="'treadmill-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Treadmill02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'treadmill-02'
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
