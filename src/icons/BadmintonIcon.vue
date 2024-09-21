
<template>
  <Icon :iconName="'badminton'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BadmintonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'badminton'
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
