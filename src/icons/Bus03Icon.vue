
<template>
  <Icon :iconName="'bus-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bus03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bus-03'
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
