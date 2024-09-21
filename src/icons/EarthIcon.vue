
<template>
  <Icon :iconName="'earth'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EarthIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'earth'
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
