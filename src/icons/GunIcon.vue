
<template>
  <Icon :iconName="'gun'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GunIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gun'
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
