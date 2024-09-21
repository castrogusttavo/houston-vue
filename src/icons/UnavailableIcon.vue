
<template>
  <Icon :iconName="'unavailable'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UnavailableIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'unavailable'
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
