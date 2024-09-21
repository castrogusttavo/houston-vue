
<template>
  <Icon :iconName="'hotel-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Hotel02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hotel-02'
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
