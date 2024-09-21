
<template>
  <Icon :iconName="'helicopter'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HelicopterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'helicopter'
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
