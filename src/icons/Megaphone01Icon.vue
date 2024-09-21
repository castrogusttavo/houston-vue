
<template>
  <Icon :iconName="'megaphone-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Megaphone01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'megaphone-01'
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
