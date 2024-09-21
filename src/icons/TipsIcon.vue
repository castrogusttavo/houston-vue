
<template>
  <Icon :iconName="'tips'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TipsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tips'
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
