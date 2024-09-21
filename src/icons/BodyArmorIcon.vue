
<template>
  <Icon :iconName="'body-armor'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BodyArmorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'body-armor'
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
