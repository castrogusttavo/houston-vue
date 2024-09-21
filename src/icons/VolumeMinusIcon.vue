
<template>
  <Icon :iconName="'volume-minus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VolumeMinusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'volume-minus'
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
