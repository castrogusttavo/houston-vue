
<template>
  <Icon :iconName="'sujood'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SujoodIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sujood'
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
