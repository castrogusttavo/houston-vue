
<template>
  <Icon :iconName="'kurta'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KurtaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'kurta'
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
