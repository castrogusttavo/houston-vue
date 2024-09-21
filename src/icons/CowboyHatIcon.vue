
<template>
  <Icon :iconName="'cowboy-hat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CowboyHatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cowboy-hat'
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
