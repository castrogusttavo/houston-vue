
<template>
  <Icon :iconName="'view-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ViewOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'view-off'
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
