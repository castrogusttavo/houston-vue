
<template>
  <Icon :iconName="'plane'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlaneIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plane'
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
