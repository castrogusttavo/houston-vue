
<template>
  <Icon :iconName="'crying'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CryingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'crying'
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
