
<template>
  <Icon :iconName="'orange'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OrangeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'orange'
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
