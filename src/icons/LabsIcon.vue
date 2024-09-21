
<template>
  <Icon :iconName="'labs'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LabsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'labs'
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
