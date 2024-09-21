
<template>
  <Icon :iconName="'building-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Building06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'building-06'
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
