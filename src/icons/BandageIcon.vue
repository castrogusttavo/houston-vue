
<template>
  <Icon :iconName="'bandage'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BandageIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bandage'
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
