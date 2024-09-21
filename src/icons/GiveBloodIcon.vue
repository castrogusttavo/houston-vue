
<template>
  <Icon :iconName="'give-blood'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GiveBloodIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'give-blood'
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
