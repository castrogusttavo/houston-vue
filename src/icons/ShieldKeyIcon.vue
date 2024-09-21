
<template>
  <Icon :iconName="'shield-key'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShieldKeyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shield-key'
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
