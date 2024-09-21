
<template>
  <Icon :iconName="'transmission'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TransmissionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'transmission'
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
