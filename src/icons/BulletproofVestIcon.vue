
<template>
  <Icon :iconName="'bulletproof-vest'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BulletproofVestIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bulletproof-vest'
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
