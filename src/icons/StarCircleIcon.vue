
<template>
  <Icon :iconName="'star-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StarCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'star-circle'
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
