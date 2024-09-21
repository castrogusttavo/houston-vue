
<template>
  <Icon :iconName="'house-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'House05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'house-05'
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
