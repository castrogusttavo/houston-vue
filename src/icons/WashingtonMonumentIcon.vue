
<template>
  <Icon :iconName="'washington-monument'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WashingtonMonumentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'washington-monument'
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
