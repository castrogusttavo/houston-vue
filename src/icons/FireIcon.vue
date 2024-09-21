
<template>
  <Icon :iconName="'fire'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FireIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fire'
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
