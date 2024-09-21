
<template>
  <Icon :iconName="'steak'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SteakIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'steak'
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
