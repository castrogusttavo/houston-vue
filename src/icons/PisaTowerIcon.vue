
<template>
  <Icon :iconName="'pisa-tower'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PisaTowerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pisa-tower'
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
