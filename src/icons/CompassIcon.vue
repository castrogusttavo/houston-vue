
<template>
  <Icon :iconName="'compass'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CompassIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'compass'
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
